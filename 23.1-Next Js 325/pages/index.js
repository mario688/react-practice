import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="Browse a huge list of higly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

// export async function getServerSideProps() {
//   return {
//     props: DUMMY_MEETUPS,
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Mario:mario1234@cluster0.ldh2i.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((el) => ({
        title: el.title,
        address: el.address,
        image: el.image,
        id: el._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
