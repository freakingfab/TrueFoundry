import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getIndexPage(): string {
    return `
    <html>

    <head>
        <title>GitHub API Sign In</title>
    </head>
    
    <body style="background:#2A2F4F; color:#FDE2F3;">
        <div style="display:flex; flex-direction:column; width:100%; margin:10%;">
            <div style="">
                <h2>Welcome To Github Authentication Page</h2>
            </div>
            <div style="height:20rem; display:flex; flex-direction:column; margin:; width:20rem; background:#917FB3; border-radius:10px; justify-content:center;">
                <button style="width:100px; height:70px; border-radius:10px; margin:0 35%" ><a href="/auth/github">Sign in with GitHub</a></button>
                <p style="margin:30px">On Clicking above code you will be asked to authorize your github profile and it will create a demo repo on your account with name repo-by-freakingfab</p>
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
