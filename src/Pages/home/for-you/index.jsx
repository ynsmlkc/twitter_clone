import { posts as postData } from "../../../mock/posts";
import Post from "../../../components/post";
import { WindowVirtualizer } from "virtua";
import {useState} from "react";

export default function ForYou() {

	const [posts, setPosts] = useState(postData)

	return (
		<WindowVirtualizer
			onRangeChange={(start, end) => {
				console.log('end', end + 1)
				if (end + 1 === posts.length) {
					setPosts(prev => [...prev, ...postData])
				}
			}}>
			{posts.map((post) => <Post post={post} key={post.id} />)}
		</WindowVirtualizer>
	)
}