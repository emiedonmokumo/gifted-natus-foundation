'use client'
const MetaDataInput = ({ editBlog, setEditBlog }: { editBlog: any; setEditBlog: any }) => {
    return (
        <div className="flex flex-col space-y-4">
            <input
                type="text"
                placeholder="Meta Title"
                className="border border-gray-300 p-2 rounded-md"
                value={editBlog.metaTitle}
                onChange={(e) => setEditBlog({ ...editBlog, metaTitle: e.target.value })}
            />
            <textarea
                placeholder="Meta Description"
                className="border border-gray-300 p-2 rounded-md"
                value={editBlog.metaDescription}
                onChange={(e) => setEditBlog({ ...editBlog, metaDescription: e.target.value })}
            />
        </div>
    );
}

export default MetaDataInput