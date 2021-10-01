import React from 'react'
import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import EarnCardContent from './EarnCardContent'
import GradientLogo from '../GradientLogoSvg'

// Values fetched from bitQuery effective 13/8/21
const txCount = 44713126
const addressCount = 2607499

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="48px" width="48px" mb="24px" />
      <Heading textAlign="center" scale="xl">
        {t('Earn in Multiple Ways')}
      </Heading>
      <br /><br />
      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <EarnCardContent
            headingText={t('Farms', { users })}
            subheadingText={t('Stake In Your Favourite LP Farms')}
            bodyText={t('Earn Love Token by Staking in LP tokens Mazimize your earning via Auto0compoundings')}
            highlightColor={theme.colors.secondary}
          />
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <EarnCardContent
            headingText={t('Pools', { trades })}
            subheadingText={t('High earnings with single asset staking')}
            bodyText={t('Stake Love Token to Earn Love TOken with our Pools, High APR Per day, week, Monthly and Yearly')}
            highlightColor={theme.colors.primary}
          />
        </IconCard>
        <IconCard {...StakedCardData}>
          <EarnCardContent
            headingText={t('Jackpot', { tvl: tvlString })}
            subheadingText={t('Chance to Earn $Love From Stake in Jackpot')}
            bodyText={t('Enjoy out No Loss Jackpot stake your token and chance to win a reward of Pool earning')}
            highlightColor={theme.colors.failure}
          />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
