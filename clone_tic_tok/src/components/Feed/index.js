import { Container } from "./styles";
import PostCard from '../PostCard';


export default function Feet ({posts}){
    return(
    <Container>

        {posts.map((post, index) => (
            <PostCard key = {index} post={post}></PostCard>
        ))}

    </Container>
    )
}

 