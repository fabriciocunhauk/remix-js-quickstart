import { Link, redirect } from "remix"
import {db} from "~/utils/db.server"

export const action = async ({ request }: any) => {
const form = await request.formData()
const title = form.get('title')
const body = form.get('body')

const fields = {title, body}

const post = await db.post.create({data: fields})

    return redirect(`/posts/${post.id}`)
}

const NewPost = () => {
    return (
        <>
        <div className="page-header">
            <h1>New Post</h1>
<Link to='/posts' className='btn btn-reverse'>
    Back
</Link>
        </div>

        <div className="page-content">
            <form method="POST">
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' id='title' placeholder="Title"/>
                </div>
                <div className="form-control">
                    <label htmlFor="body">Post Body</label>
                    <textarea name='body' id='body' placeholder="body"/>
                </div>

                <button type="submit" className="btn btn-block">
Add post
                </button>
            </form>
        </div>
        </>
    )
}

export default NewPost
