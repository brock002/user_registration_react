import { useState } from "react"
import Register from "./components/RegistrationForm"
import User from "./components/User"
import Alert from "./components/Alert"

function App() {
	const [Users, setUsers] = useState([])
	const [DisplayForm, setDisplayForm] = useState(true)
	const [ShowAlert, setShowAlert] = useState({ show: false, msg: "" })
	const [NewUser, setNewUser] = useState({
		fullname: "",
		username: "",
		email: "",
		address: "",
		dob: "",
		sex: "",
		password: "",
		password2: "",
	})

	const setAlert = (show = false, msg = "") => setShowAlert({ show, msg })

	const inputOnChange = e =>
		setNewUser({ ...NewUser, [e.target.name]: e.target.value })

	const handleSubmit = e => {
		e.preventDefault()
		if (NewUser.password === NewUser.password2) {
			setAlert(true, "User Registered Successfully")
			setUsers([...Users, NewUser])
			setDisplayForm(false)
			setNewUser({
				fullname: "",
				username: "",
				email: "",
				address: "",
				dob: "",
				sex: "",
				password: "",
				password2: "",
			})
		} else {
			setAlert(true, "Passwords didn't match!!!")
		}
	}

	return (
		<div className="container">
			{DisplayForm ? (
				<Register
					NewUser={NewUser}
					inputOnChange={inputOnChange}
					handleSubmit={handleSubmit}
				/>
			) : (
				<div className="btn-center-div">
					<button onClick={() => setDisplayForm(!DisplayForm)}>
						Submit Another Response
					</button>
				</div>
			)}

			{ShowAlert.show && <Alert msg={ShowAlert.msg} removeAlert={setAlert} />}

			{Users.length > 0 && (
				<>
					<h4 className="text-underline text-center text-margin">
						Last Registered User
					</h4>
					<User user={Users[Users.length - 1]} />
					<hr />
				</>
			)}

			{!DisplayForm && (
				<>
					<h4 className="text-underline text-center text-margin">All Users</h4>
					{Users.map((user, index) => {
						return (
							<div key={index}>
								<h5>{index + 1})</h5>
								<User user={user} />
							</div>
						)
					})}
					<hr />
				</>
			)}
		</div>
	)
}

export default App
