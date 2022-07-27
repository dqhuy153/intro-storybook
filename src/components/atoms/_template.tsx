import { ReactNode } from 'react'
import { connect } from 'react-redux'
import { Callback } from 'utils/types'
import { IRootState } from '../../reducers'

const Template = ({ children, onClick }: TemplateProps) => {
  return <p onClick={onClick}>{children}</p>
}

export type TemplateProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    children: string | ReactNode
    onClick?: Callback
  }

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Template)
