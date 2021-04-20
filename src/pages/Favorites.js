import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetUpList from "../components/meetups/MeetupList";

function FavoritesPage() {
	const favoritesContext = useContext(FavoritesContext);

	let content;

	if (favoritesContext.totalFavorites === 0) {
		content = <p>You got not favorites yet. Start adding some</p>;
	} else {
		content = <MeetUpList meetups={favoritesContext.favorites}></MeetUpList>;
	}

	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	);
}

export default FavoritesPage;
