import React from 'react'

const MetaDataInput = ({ editBlog, setEditBlog }: { editBlog: any; setEditBlog: any }) => {
    return (
        <div>
            <span className='text-xs text-gray-400'>Meta Data important Search Engine Optimization (SEO)</span>
            <div className="">
                <label className="block mb-2">Meta Title:</label>
                <input
                    type="text"
                    className="border border-gray-300 p-2 w-full mb-4"
                    placeholder="Enter blog title"
                    value={editBlog.metaTitle || ""}
                    onChange={(e) => setEditBlog({ ...editBlog, metaTitle: e.target.value })}
                />
            </div>
            <div className="">
                <label className="block mb-2">Meta Description:</label>
                <input
                    type="text"
                    className="border border-gray-300 p-2 w-full mb-4"
                    placeholder="Enter blog title"
                    value={editBlog.metaDescription || ""}
                    onChange={(e) => setEditBlog({ ...editBlog, metaDescription: e.target.value })}
                />
            </div>
        </div>
    )
}

export default MetaDataInput
