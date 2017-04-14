// @flow
import { connect } from 'react-redux'
import * as ui from '../actions/ui'
import * as profile from '../actions/profile'
import * as ipfsObject from '../actions/ipfsObject'

import ProfileEdit from '../components/ProfileEdit'
import { Store } from '../utils/types'

const mapStateToProps = (state: Store) => ({
  profile: state.profile
})

const mapDispatchToProps = dispatch => ({
  onTest: () => dispatch(ipfsObject.fetchDirectoryMetadata('QmPhnvn747LqwPYMJmQVorMaGbMSgA7mRRoyyZYz3DoZRQ')),
  onAvatarChange: (avatar) => () => dispatch(profile.publishAvatar(avatar))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)