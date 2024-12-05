import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
export function middleware(request: NextRequest) {
  const hasUserInfo = request.cookies.has('userInfo');

  if (!hasUserInfo && request.url.includes('characters')) {
    return NextResponse.redirect(new URL('/', request.url)); // Redirect to the homepage if the cookie is not present
  } else {
    const response = NextResponse.next();
  
    return response;
  }
}