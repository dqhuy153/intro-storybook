import { connect } from 'react-redux'
import { IRootState } from '../../reducers'

const Template = ({}: TemplateProps) => {
  return null
}

export type TemplateProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {}

const mapStateToProps = (state: IRootState) => ({})

const mapDispatchToProps = {}

export default connect(null, mapDispatchToProps)(Template)
