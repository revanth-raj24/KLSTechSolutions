from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_contact():
    return {
        "page": "Contact",
        "status": "active",
        "message": "Contact page placeholder API"
    }

