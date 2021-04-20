import classes from "./MeetupList.module.css";
import MeetpUpItem from "./MeetUpItem";

function MeetUpList(props) {
	return (
		<ul className={classes.list}>
			{props.meetups.map((meetup) => {
				return (
					<MeetpUpItem
						key={meetup.id}
						id={meetup.id}
						image={meetup.image}
						title={meetup.title}
						address={meetup.address}
						description={meetup.description}></MeetpUpItem>
				);
			})}
		</ul>
	);
}

export default MeetUpList;
