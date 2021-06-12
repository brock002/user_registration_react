const Register = ({ NewUser, inputOnChange, handleSubmit }) => {
	return (
		<>
			<h2 className="text-underline text-center">Register Here</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="fullname">Name: </label>
				<input
					type="text"
					name="fullname"
					value={NewUser.fullname}
					onChange={inputOnChange}
					required
				/>
				<div className="form-flex">
					<div className="form-group">
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							value={NewUser.username}
							onChange={inputOnChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email: </label>
						<input
							type="email"
							name="email"
							value={NewUser.email}
							onChange={inputOnChange}
							required
						/>
					</div>
				</div>
				<label htmlFor="address">Address: </label>
				<input
					type="text"
					name="address"
					value={NewUser.address}
					onChange={inputOnChange}
				/>
				<div className="form-flex">
					<div className="form-group">
						<label htmlFor="dob">Date of Birth: </label>
						<input
							type="date"
							name="dob"
							value={NewUser.dob}
							onChange={inputOnChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="sex">Sex: </label>
						<select name="sex" value={NewUser.sex} onChange={inputOnChange}>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="others">Others</option>
						</select>
					</div>
				</div>
				<div className="form-flex">
					<div className="form-group">
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							value={NewUser.password}
							onChange={inputOnChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password2">Confirm Password: </label>
						<input
							type="password"
							name="password2"
							value={NewUser.password2}
							onChange={inputOnChange}
							required
						/>
					</div>
				</div>
				<div className="btn-center-div">
					<button>Register</button>
				</div>
			</form>
		</>
	)
}

export default Register
