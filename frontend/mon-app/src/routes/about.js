import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Appbarrr from '../components/appbar_components';
import { height } from '@mui/system';

function About() {
    return (
        <Container maxWidth="md">
            <Appbarrr>   </Appbarrr>
            <br></br>
            <div style={{ height: '150px' }}></div>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    À propos
                </Typography>
                <Typography variant="body1">
                    Cette application a été développée pour faciliter la gestion des tickets d'assistance. Vous pouvez créer, modifier et supprimer des tickets, ainsi que les marquer comme en cours ou terminés.
                </Typography>
                <Box mt={2}>
                    <Typography variant="h6">Technologies utilisées :</Typography>
                    <ul>
                        <li>
                            <Typography variant="body1">React</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Material-UI</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Prisma</Typography>
                        </li>
                    </ul>
                </Box>
                <Box mt={2}>
                    <Typography variant="body1">
                        Pour plus d'informations ou pour signaler un problème, veuillez contacter notre équipe de support.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default About;
