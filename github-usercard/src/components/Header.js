import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Header() {
	return (
		<div>
			<AppBar position='static' style={{ marginBottom: '2rem' }}>
				<Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Typography variant='h3' component='h1' align='center'>
						Github Follower Cards
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
