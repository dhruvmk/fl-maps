import BrighterTomorrowContent from './btm'
import PublicHappinessMovementContent from './phm'
import setting from '../../../../settings.json'
// const { mapType } = Meteor.settings.public
// console.log(mapType)
let content;

if (setting.public.mapType === 'gatherings') {
  content = PublicHappinessMovementContent
} else if (setting.public.mapType === 'btm') {
  content = BrighterTomorrowContent
} else {
  throw new Error('Unknown mapType provided in settings: unable to export the appropriate content')
}

export default content