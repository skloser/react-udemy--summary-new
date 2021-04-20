
import { useHistory } from 'react-router-dom';
import NewMeetUpForm from "../components/meetups/NewMeetpUpForm";

function NewMeetupPage() {

    const history = useHistory();

	function addMeetupHandler(meetupData) {
		fetch(
			"https://react-new-udemy-max-default-rtdb.firebaseio.com/meetups.json", 
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-type": "application/json"
                }
            }
		).then(() => {
            history.replace('/');
        });
	}

	return (
		<section>
			<h1>Add New meetup</h1>
			<NewMeetUpForm onAddMeetup={addMeetupHandler}></NewMeetUpForm>
		</section>
	);
}

export default NewMeetupPage;
