import { Controller, Get, Redirect, Req } from '@nestjs/common';
import axios from 'axios';
import { GithubService } from './github.service';
@Controller('auth')
export class GithubController {
  @Get('github')
  @Redirect('https://github.com/login/oauth/authorize')
  getGithubAuthUrl() {
    const port = process.env.PORT || 3000;
    const params = new URLSearchParams({
      client_id: '30a5562a4f72ce518967',
      redirect_uri: `http://localhost:${port}/auth/github/callback`,
      scope: 'repo',
    });
    return {
      url: `https://github.com/login/oauth/authorize?${params.toString()}`,
    };
  }

  @Get('github/callback')
  async githubLoginCallback(@Req() request) {
    const { code } = request.query;
    const clientId = '30a5562a4f72ce518967';
    const clientSecret = 'f75571fd325cfc5e6921c83332aecb2eddcd3d44';
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        code,
        client_id: clientId,
        client_secret: clientSecret,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    const accessToken = response.data.access_token;
    const githubService = new GithubService();
    await githubService.createRepo('repo-by-freakingfab', accessToken);
    return `
    <html>

    <head>
        <title>GitHub API Sign In</title>
    </head>
    
    <body style="background:#2A2F4F; color:#FDE2F3;">
        <div style="display:flex; flex-direction:column; width:100%; margin:10%;">
            <div style="">
                <h4>Thanks for Authenticating with us. Your Repository has been created Please Check!</h4>
            </div>
            
            <div style="position:fixed; bottom:0; left:0; height:30px; width:100%; background:#917FB3; text-align:center; color:#FDE2F3;">
                Created By FreakingFab 😎😎
            </div>
        </div>
    </body>
    
    </html>
    `;
  }
}
