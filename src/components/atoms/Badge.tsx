import { connect } from 'react-redux'
import { Badge as ChakraBadge } from '@chakra-ui/react'
import { IRootState } from '../../reducers'
import { ReactNode } from 'react'

const Badge = ({
  variant,
  borderRadiusSize = 'md',
  padding = 4,
  children,
}: BadgeProps) => {
  let colorBadge
  switch (variant) {
    case 'default':
      colorBadge = 'orange'
      break
    case 'inprogress':
      colorBadge = 'blue'
      break
    case 'success':
      colorBadge = 'green'
      break
    case 'danger':
      colorBadge = 'red'
      break

    default:
      colorBadge = 'cyan'
      break
  }

  return (
    <ChakraBadge
      colorScheme={colorBadge}
      p={padding}
      borderRadius={borderRadiusSize}
    >
      {children}
    </ChakraBadge>
  )
}

export type BadgeVariant = 'default' | 'success' | 'inprogress' | 'danger'
export type BadgeSize = 'sm' | 'md' | 'lg' | 'xl'

export type BadgeProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    variant: BadgeVariant
    borderRadiusSize: BadgeSize
    padding: number
    children: ReactNode
  }

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = {}

export default connect(null, mapDispatchToProps)(Badge)
