let now = new Date()
now
typeof now
let adHoc = {
firstName: 'Stewart',
secondName: 'Dent',
age: 27
}
adHoc
adHoc.firstName
adHoc.secondName
adHoc.lastName
adHoc.lastName = adHoc.secondName
adHoc
adHoc.secondName = 'Andrew'
adHoc.initials = function() {
return this.firstName[0] + '.' + this.secondName[0] + '.' + this.lastName[0] + '.';
}
adHoc.initials()
typeof adHoc
now.constructor.name
adHoc.constructor.name