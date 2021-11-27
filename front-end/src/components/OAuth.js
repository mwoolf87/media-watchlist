import React from 'react'


export default function OAuth() {
    return (
        <div>
            <button action="/auth/github" block size="lg" type="submit">
                Github Login
            </button>
        </div>
    )
}