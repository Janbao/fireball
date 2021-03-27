
import React from 'react';
import {Box, CircularProgress, Grid, TextField, Tooltip, Typography} from '@material-ui/core';
import classNames from 'classnames';
import {useStyles} from '../styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import commonUtils from '../../../utils/commonUtils';

import ghst from '../../../assets/images/ghst-doubleside.gif';

export default function RaffleTable({tickets, supplySpinner, pricesSpinner, setCommonQuantity, setUncommonQuantity,
                                        setRareQuantity, setLegendaryQuantity, setMythicalQuantity, setGodlikeQuantity}) {
    const classes = useStyles();

    const getTicketIconPath = (iconId) => {
        return require(`../../../assets/tickets/${iconId}.svg`).default;
    };
    
    return (
        <Grid item>
            <Grid container alignItems='center' justify='space-between' spacing={2} className={classes.row}>
                <Grid item xs={12} md={3}>
                    <Typography variant='h6' className={classes.subtitle}>Your Tickets</Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} md={8} lg={9}>
                    <Grid item xs={4} sm={true}>
                        <TextField
                            type='number'
                            variant='outlined'
                            fullWidth
                            className={classNames(classes.input, 'common')}
                            label={'Common'}
                            onChange={(event) => {
                                setCommonQuantity(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={true}>
                        <TextField
                            type='number'
                            variant='outlined'
                            fullWidth
                            className={classNames(classes.input, 'uncommon')}
                            label={'Uncommon'}
                            onChange={(event) => {
                                setUncommonQuantity(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={true}>
                        <TextField
                            type='number'
                            variant='outlined'
                            fullWidth
                            className={classNames(classes.input, 'rare')}
                            label={'Rare'}
                            onChange={(event) => {
                                setRareQuantity(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={true}>
                        <TextField
                            type='number'
                            variant='outlined'
                            fullWidth
                            className={classNames(classes.input, 'legendary')}
                            label={'Legendary'}
                            onChange={(event) => {
                                setLegendaryQuantity(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={true}>
                        <TextField
                            type='number'
                            variant='outlined'
                            fullWidth
                            className={classNames(classes.input, 'mythical')}
                            label={'Mythical'}
                            onChange={(event) => {
                                setMythicalQuantity(event.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={4} sm={true}>
                        <TextField
                            type='number'
                            variant='outlined'
                            fullWidth
                            className={classNames(classes.input, 'godlike')}
                            label={'Godlike'}
                            onChange={(event) => {
                                setGodlikeQuantity(event.target.value);
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container alignItems='center' justify='space-between' spacing={2} className={classes.row}>
                <Grid item xs={12} md={3}>
                    <Typography variant='h6' className={classes.subtitle}>Items in Raffle</Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} md={8} lg={9}>
                    {
                        tickets.map((ticket, i) => {
                            return <Grid item xs={4} sm={true} key={i}>
                                <Typography
                                    variant='body1'
                                    align='center'
                                    className={classNames(classes.textHighlight, ticket.type, classes.tableValue)}
                                >
                                    {commonUtils.formatNumber(ticket.items)}
                                </Typography>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
            <Grid container alignItems='center' justify='space-between' spacing={2} className={classes.row}>
                <Grid item xs={12} md={3}>
                    <Typography variant='h6' className={classes.subtitle}>
                        Tickets Supply
                        <Tooltip
                            placement='right'
                            arrow
                            enterTouchDelay={0}
                            title={
                                <React.Fragment>
                                    <Typography>The number of tickets is updated every 3 minutes. There is no need to reload the page</Typography>
                                </React.Fragment>
                            }
                        >
                            <HelpOutlineIcon fontSize='small' className={classes.subtitleIcon} />
                        </Tooltip>
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} md={8} lg={9}>
                    {
                        tickets.map((ticket, i) => {
                            return <Grid item xs={4} sm={true} key={i} className={classes.ticketBg}>
                                <img src={getTicketIconPath(ticket.type)} alt={'ticket-' + ticket.type} />
                                <Box align='center' className={classNames(classes.textHighlight, ticket.type, classes.ticketVisual)}>
                                    {supplySpinner ? (
                                        <CircularProgress color="inherit" size={20} style={{bottom: -5, position: 'relative'}}/>
                                    ) : (
                                        <Typography
                                            variant='body1'
                                            align='center'
                                            className={classNames(classes.tableValue, classes.price)}
                                        >
                                            {commonUtils.formatNumber(ticket.supply)}
                                        </Typography>
                                    )}
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
            <Grid container alignItems='center' justify='space-between' spacing={2} className={classes.row}>
                <Grid item xs={12} md={3}>
                    <Typography variant='h6' className={classes.subtitle}>
                        Frens market cap
                        <Tooltip
                            placement='right'
                            arrow
                            enterTouchDelay={0}
                            title={
                                <React.Fragment>
                                    <Typography>Total amount of frens spent to the tickets</Typography>
                                </React.Fragment>
                            }
                        >
                            <HelpOutlineIcon fontSize='small' className={classes.subtitleIcon} />
                        </Tooltip>
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} md={8} lg={9}>
                    {
                        tickets.map((ticket, i) => {
                            return <Grid item xs={4} sm={true} key={i} className={classNames(classes.chance, ticket.type)}>
                                <Box align='center' className={classNames(classes.textHighlight, ticket.type, classes.ticketVisual)}>
                                    {supplySpinner ? (
                                        <CircularProgress color="inherit" size={20} style={{bottom: -5, position: 'relative'}}/>
                                    ) : (
                                        <Typography
                                            variant='body1'
                                            align='center'
                                            className={classNames(classes.tableValue, classes.price)}
                                        >
                                            {commonUtils.formatNumber(ticket.supply * ticket.priceInFrens)}
                                        </Typography>
                                    )}
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
            <Grid container alignItems='center' justify='space-between' spacing={2} className={classes.row}>
                <Grid item xs={12} md={3}>
                    <Typography variant='h6' className={classes.subtitle}>
                        Estimated baazaar price
                        <Tooltip
                            placement='right'
                            arrow
                            enterTouchDelay={0}
                            title={
                                <React.Fragment>
                                    <Typography>Average ticket price on Baazaar for the last 5 trades</Typography>
                                </React.Fragment>
                            }
                        >
                            <HelpOutlineIcon fontSize='small' className={classes.subtitleIcon} />
                        </Tooltip>
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} md={8} lg={9}>
                    {
                        tickets.map((ticket, i) => {
                            return <Grid item xs={4} sm={true} key={i}>
                                <Box align='center' className={classNames(classes.textHighlight, ticket.type)}>
                                    {pricesSpinner ? (
                                        <CircularProgress color="inherit" size={20} />
                                    ) : (
                                        <Typography
                                            variant='body1'
                                            align='center'
                                            className={classNames(classes.tableValue, classes.price)}
                                        >
                                            {ticket.cost}
                                            <img src={ghst} width='26' alt='GHST Token Icon' />
                                        </Typography>
                                    )}
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
            <Grid container alignItems='center' justify='space-between' spacing={2} className={classes.row}>
                <Grid item xs={12} md={3}>
                    <Typography variant='h6' className={classes.subtitle}>
                        Your items
                        <Tooltip
                            placement='right'
                            arrow
                            enterTouchDelay={0}
                            title={
                                <React.Fragment>
                                    <Typography>How many items you will get on average</Typography>
                                </React.Fragment>
                            }
                        >
                            <HelpOutlineIcon fontSize='small' className={classes.subtitleIcon} />
                        </Tooltip>
                    </Typography>
                </Grid>
                <Grid container item spacing={1} xs={12} md={8} lg={9}>
                    {
                        tickets.map((ticket, i) => {
                            return <Grid item xs={4} sm={true} key={i} className={classNames(classes.chance, ticket.type, ticket.chance !== 0 ? 'highlighted' : '')}>
                                <Typography
                                    variant='body1'
                                    align='center'
                                    className={classNames(classes.textHighlight, ticket.type, classes.tableValue)}
                                >
                                    {ticket.chance}
                                </Typography>
                            </Grid>
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}