import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

import { XPositions } from '@/types'
import { cn } from '@/lib/utils'

interface ILinkWithArrowProps {
  href?: string
  onClick?: () => void
  position: XPositions
  text: string
  className?: string
}
/**
 *
 * 'href' - is good to use if you need navigate by route
 * 'onClick' - for using custom logic after clicking
 */
export const LinkWithArrow = ({
  href,
  position,
  onClick,
  text,
  className = ''
}: ILinkWithArrowProps): JSX.Element => {
  const conditionalProps = {
    ...(onClick && { onClick })
  }

  const Container = ({ children }: { children: React.ReactNode }) =>
    href ? <Link href={href}>{children}</Link> : <>{children}</>

  return (
    <Button variant="link" className={cn("pl-0", className)} {...conditionalProps}>
      <Container>
        <>
          {position === XPositions.Left && (
            <>
              <ArrowLeftIcon className="pl-[0px] mr-[2px]" />{' '}
            </>
          )}
          {text}
          {position === XPositions.Right && (
            <>
              {' '}
              <ArrowLeftIcon className="pl-[0px] mr-[2px]" />
            </>
          )}
        </>
      </Container>
    </Button>
  )
}
