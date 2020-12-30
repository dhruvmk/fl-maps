import EmergencyBrighterTomorrowContent from './emergency-btm'
import EmergencyPublicHappinessMovementContent from './emergency-phm'

const { mapType } = Meteor.settings.public
console.log(mapType)
let content;

if (mapType === 'gatherings') content = EmergencyPublicHappinessMovementContent
else if (mapType === 'btm') content = EmergencyBrighterTomorrowContent
else throw new Error('Unknown mapType provided in settings: unable to export the appropriate content')

export default content
