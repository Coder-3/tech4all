import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Head from "next/head";
import {
    AppShell,
    Burger,
    Button,
    Global,
    Header,
    MantineProvider,
    MediaQuery,
    Navbar,
    Text,
    createStyles,
    Space,
    Anchor,
} from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "@supabase/supabase-js";
import supabase from "../utils/supabase";
import FooterComponent from "../components/FooterComponent";

const useStyles = createStyles((theme) => ({

    aboutus: {
        display: "flex",
        flexDirection: "column",


        [theme.fn.smallerThan("md")]: {
            overflowWrap: "break-word",
            wordWrap: "break-word",
            hyphens: "auto",
            whiteSpace: "normal",
        },

    },
    top: {
        display: "flex",
        flexDirection: "column",
        maxwidth: "64rem",
        alignContent: "center",
        justifyContent: "left",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",

    },
    header: {
        display: "flex",
        justifyContent: "left",
        fontWeight: 400,
        fontSize: "2rem",
        color: "#2D8EDD",
        [theme.fn.smallerThan("md")]: {
            textAlign: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
        },
        [theme.fn.smallerThan("sm")]: {
            fontSize: "1rem",
        },

    },
    mission: {
        display: "flex",
        justifyContent: "left",
        fontWeight: 600,
        fontSize: "3.75rem",
        textAlign: "left",
        lineHeight: "1",
        [theme.fn.smallerThan("md")]: {

            textAlign: "center",
            justifyContent: "center",
            fontSize: "2rem",
            lineHeight: "1.1",
            overflowWrap: "break-word",
            wordWrap: "break-word",
            hyphens: "auto",
            whiteSpace: "normal",
        },
        [theme.fn.smallerThan("sm")]: {
            fontSize: "1.5rem",
        },
    },
    goal: {
        backgroundColor: "#2D8EDD",
        color: "white",
    },
    goalText: {
        textAlign: "center",
        fontWeight: 600,
        display: "flex",
        maxWidth: "64rem",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        fontSize: "2rem",
        paddingBottom: "4rem",
        paddingTop: "4rem",
        [theme.fn.smallerThan("md")]: {
            textAlign: "center",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingBottom: "3rem",
            paddingTop: "3rem",
            lineHeight: "2rem",
            fontSize: "1.25rem",
        },
        [theme.fn.smallerThan("sm")]: {
            fontSize: "1rem",
        },
    },
    mountainWoman: {
        marginBottom: "20px",
        width: "100%",
        height: "100%",
        padding: "0",
        bottom: "0",
        top: "0",
        left: "0",
        right: "0",

    },
    goalExplanation: {
        backgroundColor: "white",
    },
    goalExplanationText: {
        fontWeight: 400,
        display: "flex",
        flexDirection: "column",
        maxWidth: "64rem",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        fontSize: "1.5rem",
        paddingBottom: "4rem",
        paddingTop: "4rem",
        [theme.fn.smallerThan("md")]: {
            textAlign: "left",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingBottom: "3rem",
            paddingTop: "3rem",
            fontSize: "1.25rem",
        },
        [theme.fn.smallerThan("sm")]: {
            fontSize: "1rem",
        },
    },

    ourValues: {
        backgroundColor: "white",
    },
    valueHeader: {
        fontWeight: 600,
        display: "flex",
        flexDirection: "column",
        maxWidth: "64rem",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        fontSize: "2rem",
        color: "#2D8EDD",
        [theme.fn.smallerThan("md")]: {
            textAlign: "left",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            lineHeight: "2rem",
            fontSize: "1.5rem",
        },
        [theme.fn.smallerThan("sm")]: {
            fontSize: "1rem",
        },
    },
    value: {
        fontWeight: 600,
        display: "flex",
        flexDirection: "column",
        maxWidth: "64rem",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        fontSize: "3.5rem",
        lineHeight:"3.5rem",
        [theme.fn.smallerThan("md")]: {
            textAlign: "left",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            lineHeight:"2.5rem",
            fontSize: "2.75rem",
        },
        [theme.fn.smallerThan("sm")]: {
            fontSize: "2rem",
        },
    },
    coolLine: {
        fontWeight: 600,
        display: "flex",
        flexDirection: "column",
        maxWidth: "64rem",
        marginTop: "1rem",
        fontSize: "2.25rem",
        backgroundColor: "#2D8EDD",
        height: "0.2rem",
        width: "3rem",
        [theme.fn.smallerThan("md")]: {
            height: "0.1rem",
            width: "1.5rem",
        },
        [theme.fn.smallerThan("sm")]: {
            fontSize: "2rem",
        },
    },
    valueExplanationText: {
        fontWeight: 200,
        display: "flex",
        flexDirection: "column",
        maxWidth: "64rem",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        fontSize: "1.5rem",
        paddingBottom: "5rem",
        paddingTop: "2rem",
        [theme.fn.smallerThan("md")]: {
            textAlign: "left",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingBottom: "3rem",
            paddingTop: "1rem",
            fontSize: "1.25rem",
        },
        [theme.fn.smallerThan("sm")]: {
            fontSize: "1rem",
        },
    },


}));




const Home: NextPage = () => {
    const { classes } = useStyles();
    return (
        <section className={classes.aboutus}>
            <div className={classes.top}>
                <div className={classes.header}>
                    Who we are
                </div>
                <div className={classes.mission}>
                    Our motivation to drive success in individuals
                </div>
            </div>
            <img className={classes.mountainWoman} src="images\mountainWoman2.png" />
            <div className={classes.goal}>
                <div className={classes.goalText}>
                    We started Tech4All because we believe everyone should get the opportunity to create something from what little they have
                </div>
            </div>
            <div className={classes.goalExplanation}>
                <div className={classes.goalExplanationText}>
                    <p>We are a world of ideas, but not enough of them come into fruition. As much as we have noticed that the education system is changing, we want to give the less fortunate a chance to learn, churn and earn, all while dedicating themselves to creating their very own software as a service startup. We are just here to assist them along their journey.</p>
                    <p>Unfortunately, there are a lot of unrecognised, talented people across the globe. Most of which, live in underdeveloped regions with very basic living standards. We plan to target these individuals and educate them on the basics of technology, design and business concepts, so they can create their very own startup with our help. Anyone with a device, internet connection and willingness to learn courses across 6 months are eligible. It’s as simple as that!            </p>
                </div>
            </div>
            <div className={classes.ourValues}>
                <div className={classes.valueHeader}>
                    Our values
                </div>
                <div className={classes.value}>
                    Helping, not Selling
                    <div className={classes.coolLine} />
                </div>
                <div className={classes.valueExplanationText}>
                    We want to give purpose to individuals with less opportunity, while keeping them self-sustainable through financial independence. As opposed to traditional business models, we are aiming to help our clients rather than sell to them. This is why all our courses are free and we have no pay for premium options.
                </div>

                <div className={classes.value}>
                Collaborative, not competitive
                    <div className={classes.coolLine} />
                </div>
                <div className={classes.valueExplanationText}>
                Building a community of like-minded individuals that are constantly collaborating by sharing, rather than competing by keeping new ideas and innovative solutions. We strongly believe that working together is the way forward.
                </div>

                <div className={classes.value}>
                Pass for premium, not pay for premium
                    <div className={classes.coolLine} />
                </div>
                <div className={classes.valueExplanationText}>
                With the help of our immersive online courses and knowledge packs, we give all our users the opportunity to learn. With this knowledge, they can pitch us a saas idea that they are ambitious about through an interview and if they qualify, they unlock access to our ‘premium services’ which will help them persure and build their product.
                </div>

                <div className={classes.value}>
                Sustainability, not rapid growth
                    <div className={classes.coolLine} />
                </div>
                <div className={classes.valueExplanationText}>
                We advocate successful, sustainable growth that foster long-term acomplishments, rather than risky, rapid growth. Unlike traditional startups that aim to recklessly expand, we acknowledge that incremental and planned growth reduces uneccessary risks and adds value to an organisation.
                </div>

                <div className={classes.value}>
                Positive-sum, not zero-sum
                    <div className={classes.coolLine} />
                </div>
                <div className={classes.valueExplanationText}>
                Information is omnipresent, knowledge should be free and solutions are endless. We recognise that software solutions can be constantly created as long as there are inconveniences within our professional and social lives. We equally support and encourage any founder with productive ideas or services, as we believe that any potential or existing founder can benefit from the collective value we add to the Tech4All community.
                </div>

            </div>

        </section>

    );
};

export default Home;
