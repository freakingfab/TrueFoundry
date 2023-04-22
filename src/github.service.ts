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
    return response.data;
  }
}
