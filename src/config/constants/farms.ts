import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 2,
    lpSymbol: 'LOT',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x9286cbd3eedac8242d17a88d59fa59d126508211',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'LOT-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 0,
    lpSymbol: 'LOT-BUSD LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  }
]

export default farms
