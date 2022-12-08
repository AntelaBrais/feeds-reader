import {
	useAppSelector,
	useAppDispatch,
} from "../../../shared/infra/redux/hooks"
import { change } from "../redux/articlesSlice"

export const useSearchArticle = (articleTitle?: string) => {
	const searchText = useAppSelector((state) => state.articles.searchText)
	const dispatch = useAppDispatch()

	const articleTitleIncludesSearch = (articleTitle) => {
		return articleTitle.title.toLowerCase().includes(searchText.toLowerCase())
	}

	const handleSearchTextChange = (text) => {
		dispatch(change(text))
	}

	return { searchText, handleSearchTextChange, articleTitleIncludesSearch }
}
