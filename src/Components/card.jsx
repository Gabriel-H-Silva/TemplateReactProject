import { Card, CardContent, Typography } from "@mui/material";
import React from "react";


const CardComponent = ({ title, body, icon }) => {

    return (
        <Card >
            <React.Fragment>
                <CardContent>
                    
                    <Typography sx={{ fontSize: 16 }} color="primary" variant="h6" gutterBottom>
                        {title}
                    </Typography>

                    <Typography color="textPrimary" variant="h5" textAlign={"right"}>
                        {icon} {body}
                    </Typography>
                    
                </CardContent>
            </React.Fragment>
        </Card>
    );
};
export default CardComponent;