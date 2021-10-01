import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.cake,
    earningToken: tokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x6fE51F98962938BCCbF5f32976cadBd6ea463072',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 1,
  //   stakingToken: tokens.bnb,
  //   earningToken: tokens.cake,
  //   contractAddress: {
  //     97: '',
  //     56: '0x6fE51F98962938BCCbF5f32976cadBd6ea463072',
  //   },
  //   poolCategory: PoolCategory.BINANCE,
  //   harvest: true,
  //   tokenPerBlock: '0.5',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
  // {
  //   sousId: 0,
  //   stakingToken: tokens.cake,
  //   earningToken: tokens.bnb,
  //   contractAddress: {
  //     97: '',
  //     56: '0x6fE51F98962938BCCbF5f32976cadBd6ea463072',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '0.0041',
  //   sortOrder: 999,
  //   isFinished: true,
  // },
]

export default pools
