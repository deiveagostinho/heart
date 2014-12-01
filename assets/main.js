var React = require('react')
  , Heart = require('./index')

var ju = {
  name: 'Ju Gonçalves',
  link: 'http://jugoncalv.es'
}

var snowman = {
  name: '☃',
  link: 'http://twitter.com/junspector'
}

var facebook = {
  name: 'Facebook',
  link: 'http://facebook.com'
}

React.renderComponent(
  <Heart made="made" heart="♥" animation="hrt-beating" />,
  document.querySelector('#heart')
)

React.renderComponent(
  <Heart made="</>" heart="☕" />,
  document.querySelector('#coffee')
)

React.renderComponent(
  <Heart made="</>" heart="♫" />,
  document.querySelector('#music')
)

React.renderComponent(
  <Heart made="</>" heart="React" author={facebook} />,
  document.querySelector('#react')
)

React.renderComponent(
  <Heart made="built" heart="❄" author={snowman}/>,
  document.querySelector('#snowman')
)

React.renderComponent(
  <Heart made="</>" heart="♡" animation="hrt-beating" author={ju}/>,
  document.querySelector('#made-with-love')
)
