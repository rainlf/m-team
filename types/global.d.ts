/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

declare namespace App {
  interface ApiResp<T> {
    success: boolean,
    data: T,
    errorMsg: string,
  }

  interface UserInfo {
    id: number,
    nickname: string,
    avatar: string,
    copperCoin: number,
    silverCoin: number,
    goldCoin: number,
  }

  interface MahjongGameInfo {
    recorderId: number,
    winnerIds: number[],
    loserIds: number[],
    winCase: number,
    baseFan: number,
    fanList: number[],
  }

  interface MahjongUserTag {
    userId: number,
    tags: string[],
  }

  interface MahjongLog {
    recorderId: number,
    recorderName: string,
    recorderAvatar: string,
    recorderAward: number,
    gameTags: string[],
    winners: { userId: number, userName: string, userAvatar: string, socre: number }[],
    losers: { userId: number, userName: string, userAvatar: string, socre: number }[],
  }
}
