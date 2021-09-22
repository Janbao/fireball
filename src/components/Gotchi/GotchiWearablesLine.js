import React from 'react';
import { Link, useTheme } from '@material-ui/core';
import classNames from 'classnames';
import itemUtils from '../../utils/itemUtils';
import CallMadeIcon from '@material-ui/icons/CallMade';
import useStyles from './styles';

export default function GotchiWearablesLine({wearables}) {
    const classes = useStyles();
    const theme = useTheme();
    const wearableSlots = ['Body', 'Face', 'Eyes', 'Head', 'R Hand', 'L Hand', 'Pet'];

    const renderPopover = (id, type, color) => {
        if(id !== 0) {
            return (
                <Link 
                    className={classes.gotchiWLineLink}
                    href={`https://wiki.aavegotchi.com/en/wearables#${type}`}
                    target={'_blank'}
                >
                    <div
                        className={classNames(classes.gotchiWLinePopover, 'popover-core')}
                        style={{ backgroundColor: theme.palette.rarity[color] }}
                    >
                        <img
                            src={itemUtils.getWearableImg(id)}
                            alt={itemUtils.getItemNameById(id)}
                            height={40}
                            width={40}
                        />
                        <CallMadeIcon color='secondary' className={classes.callMadeIcon} />
                    </div>
                </Link>
            )
        } else {
            return (
                <div
                    className={classNames(classes.gotchiWLinePopover, 'popover-core')}
                    style={{ backgroundColor: theme.palette.rarity[color] }}
                >
                    <p className={classes.gotchiWLinePopoverEmpty}>
                        Empty
                    </p>
                </div>
            )
        }
    }

    return (
        <div className={classes.gotchiWLineWrapper}>
            {
                wearableSlots.map((name, index)=> {
                    let wearable = wearables[index];
                    let type = itemUtils.getItemTypeById(wearable);
                    let rarityColor = itemUtils.getItemRarityById(wearable);

                    return (
                        <div
                            className={classes.gotchiWLineItem}
                            style={{ backgroundColor: theme.palette.rarity[rarityColor] }}
                            key={index}
                        >
                            {renderPopover(wearable, type, rarityColor)}
                            <p className={classNames(classes.gotchiWLinePopoverName, 'name')}>
                                {name}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    );
}