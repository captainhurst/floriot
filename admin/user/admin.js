var models = require('./models');

var admin = {};

admin.user = {
	modelSlug: "user",
	modelName: "Admin Users",
	mongooseName: "User",
	collection: "users",
	fieldList: [
					{
						fieldName: "firstName",
						inputLabel: "First Name",
						placeholder: "First Name",
						fieldType: "text",
						inputClass: "form-control",
						maxLength: 50,

					},
					{
						fieldName: "lastName",
						inputLabel: "Last Name",
						placeholder: "Last Name",
						fieldType: "text",
						inputClass: "form-control",
						maxLength: 50,
					},
					{
						fieldName: "bio",
						inputLabel: "User Bio",
						placeholder: "Write a short bio...",
						helperText: "Contact and Login Email Address",												
						fieldType: "wysiwyg",
						numRows: 15,						
						inputClass: "form-control",
					},
					{
						fieldName: "email",
						inputLabel: "Email",
						helperText: "Contact and Login Email Address",						
						placeholder: "email@example.com",
						fieldType: "text",
						inputClass: "form-control",
						maxLength: 50,
					},
					{
						fieldName: "isVerified",
						inputLabel: "Verified User?",
						fieldType: "checkbox",
						inputClass: "form-control",
					},
					{
						fieldName: "age",
						inputLabel: "User Age",
						placeholder: "Age",
						fieldType: "text",
						inputClass: "form-control",
						helperText: "Age in Numbers",												
						maxLength: 3,
					},
					{
						fieldName: "user-type",
						inputLabel: "User Type",
						helperText: "Select The User Type",												
						options: [
							{
								value: "admin",
								name: "Admin"
							},
							{
								value: "user",
								name: "User"
							},
							{
								value: "contributor",
								name: "Contributor"
							}
						],
						fieldType: "dropdown",
						inputClass: "form-control",
						maxLength: 3,
					},
					{
						fieldName: "registrationDate",
						inputLabel: "Registration Date",
						fieldType: "date",
						inputClass: "form-control",
						maxLength: 3,
					}
				]
}



module.exports = admin;