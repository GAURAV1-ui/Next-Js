import { useRouter } from "next/router";

function News (){

    const router = useRouter();

    const newId = router.query.newsId;

    return <h1>The News pages</h1>
}

export default News;