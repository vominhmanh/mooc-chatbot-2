import type { FC } from 'react'
import React from 'react'
import { RiRefreshLine } from '@remixicon/react'
import { useTranslation } from 'react-i18next'
import Tooltip from '@/app/components/base/tooltip'
import LogoChat from '@/app/components/base/logo/logo-chat'

export type IHeaderProps = {
  isMobile?: boolean
  customerIcon?: React.ReactNode
  description?: string
  title: string
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = ({
  isMobile,
  customerIcon,
  title,
  description,
  onCreateNewChat,
}) => {
  const { t } = useTranslation()
  if (!isMobile)
    return null

  return (
    <div
      className={`
        shrink-0 flex items-center justify-between h-14 px-4 bg-gray-100 
        bg-gradient-to-r to-sky-500
      `}
    >
      <div className="flex items-center space-x-2">
        <LogoChat />
        <div>
          <div className="text-xl text-[#101828]">{title}</div>
          <p className="text-[#475467]">{description}</p>
        </div>
      </div>
      <Tooltip
        selector={'embed-scene-restart-button'}
        htmlContent={t('share.chat.resetChat')}
        position="top"
      >
        <div
          className="flex cursor-pointer hover:rounded-lg hover:bg-black/5 w-8 h-8 items-center justify-center"
          onClick={() => {
            onCreateNewChat?.()
          }}
        >
          <RiRefreshLine className="h-4 w-4 text-sm font-bold" />
        </div>
      </Tooltip>
      {/* <RiCloseLine /> */}
    </div>
  )
}

export default React.memo(Header)
