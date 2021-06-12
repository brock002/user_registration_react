import { useEffect } from "react"

const Alert = ({ msg, removeAlert }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert()
		}, 4000)
		return () => clearTimeout(timeout)
	}, [removeAlert])

	return (
		<div className="alert-div">
			<p>{msg}</p>
		</div>
	)
}

export default Alert
