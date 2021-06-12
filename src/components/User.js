const User = ({ user }) => {
	return (
		<div className="user-div">
			<p>
				Name: {user.fullname}
				<br />
				Username: {user.username}
				<br />
				Email ID: {user.email}
				<br />
				Date of Birth: {user.dob}
				<br />
				Sex: {user.sex}
				<br />
				Address: {user.address}
				<br />
				**passwords are hidden
			</p>
		</div>
	)
}

export default User
