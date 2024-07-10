import type { FC } from 'react'

type LogoChatProps = {
  className?: string
}
const LogoChat: FC<LogoChatProps> = ({
  className,
}) => {
  return (
    <img
      src='/logo/chatbot-icon.svg'
      className={`block w-auto ${className}`}
      alt='logo'
    />
  )
}

export default LogoChat
