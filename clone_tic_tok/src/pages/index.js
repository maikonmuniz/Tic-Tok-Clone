import Layout from "../components/Layout"
import Feed from "../components/Feed"
import Suggestions from "../components/Suggestions"
export default function Index({posts = []}){



    return (
        <>
        <Layout>
            <Feed posts={posts}></Feed>
            <Suggestions></Suggestions>
        </Layout>
        
        </>
    )
}

export async function getServerSideProps(context){

const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar:
          '/images/sam.jpg',
       name: 'Maikon Muniz',
        username: 'Siva',
      },
      description: 'Clone para praticar Next Js',
      tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
      songName: 'Developer Maikon Muniz da Silva - Software',
      videoUrl:
      "https://v16m.tiktokcdn.com/8f97385fd500d663ba52f5f595dff340/61068c86/video/tos/useast2a/tos-useast2a-ve-0068c001/6762d2efbb57488d8f9f93c76ad52e8a/?a=1233&br=3846&bt=1923&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq.lcEwb_4ka&l=2021080105584201019020909516F00A02&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2dsZTM6Zmg5NjMzNzczM0ApaGg5OGU7NTs8N2Q7NTU0ZGcuMWIwcjRvcXJgLS1kMTZzcy4zMy0wLmBhMGFjNC1hNmE6Yw%3D%3D&vl=&vr=",
      likes: 0,
      comments: 0,
      replies: 0,
    },
    {
      id: 2,
      author: {
        id: 2,
        avatar:
          '/images/sam.jpg',
        name: 'Maikon Silva',
        username: 'Muniz',
      },
      description: 'Clone para praticar Next Js',
      tags: [{ title: '#youtube' }, { title: '#clone' }],
      songName: 'Developer Maikon Muniz da Silva - Software',
      videoUrl:
        'https://v16-web-newkey.tiktokcdn.com/377f706b8664a2b3c68420b8740c311c/5f6cf201/video/tos/alisg/tos-alisg-pve-0037c001/9fb4d52876d340eda534984097fb7d1b/?a=1988&br=1726&bt=863&cr=0&cs=0&dr=0&ds=3&er=&l=202009241322340101890710710A01D2D5&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajpsM2g7Zm9ydzMzMzczM0ApZDQ4OGY5ZWQ5NzUzOTlnOGdyMjQ1X3FgYGlfLS0tMTRzc2FjYjUyXy8yMy5hMDUyMDY6Yw%3D%3D&vl=&vr=',
      likes: 0,
     comments: 0,
    replies: 0,
   },
  ];


  return {
   props: {
     posts: JSON.parse(JSON.stringify(data)),
   }, // will be passed to the page component as props
 };
}
