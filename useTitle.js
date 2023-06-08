import { useEffect } from "react"

const useTitle = title => {
	useEffect(() => {
		document.title = `Global Language Academy | ${title}`;
	}, [title])
}

export default useTitle;