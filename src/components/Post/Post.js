import React from "react";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	makeStyles,
	Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	card: {
		width: "25%",
		margin: "1%",
		padding: "2%",
	},
	id: {
		fontSize: 20,
		textAlign: "center",
	},
	title: {
		fontSize: 25,
		marginBottom: "20px",
		color: "lightcoral",
	},
	button: {
		margin: "auto",
		textDecoration: "none",
	},
});

const Post = ({ post }) => {
	const classes = useStyles();

	const { id, title, body } = post;

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.id} color="textSecondary" gutterBottom>
					{id}
				</Typography>
				<Typography variant="h4" className={classes.title} component="h4">
					{title}
				</Typography>

				<Typography variant="body2" component="p">
					{body.slice(0, 50)} ......
				</Typography>
			</CardContent>
			<CardActions>
				<Link to={`/posts/${id}`} className={classes.button}>
					<Button size="small" color="primary">
						Read More
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default Post;
