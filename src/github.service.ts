import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  async createRepo(name: string, accessToken: string) {
    const response = await axios.post(
      'https://api.github.com/user/repos',
      {
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const repo = response.data;

    // create file
    const fileResponse = await axios.put(
      `https://api.github.com/repos/${repo.full_name}/contents/hello.txt`,
      {
        message: 'Add hello.txt',
        content: btoa('Hello, world!'),
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const file = fileResponse.data;
    
    return { repo, file };
  }
}
