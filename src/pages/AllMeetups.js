import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
	const [isLoading, setLoading] = useState(true);
	const [loadedmeetups, setLoadedmeetups] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch(
			"https://react-new-udemy-max-default-rtdb.firebaseio.com/meetups.json"
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];

				for (let key in data) {
					const meetup = {
						id: key,
						...data[key],
					};

					meetups.push(meetup);
				}

				setLoading(false);
				setLoadedmeetups(meetups);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading ...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All meetups</h1>
			<ul>
				<MeetupList meetups={loadedmeetups}></MeetupList>
			</ul>
		</section>
	);
}

export default AllMeetupsPage;
