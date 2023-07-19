import { useEffect } from "react"

const useTitle = title => {
	useEffect(() => {
		document.title = `Md Amirul Islam | ${title}`;
	}, [title])
}

export default useTitle;