import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
export function middleware(request: NextRequest) {
  // Assume a "Cookie:userInfo=true" header to be present on the incoming request
  const hasUserInfo = request.cookies.has('userInfo');

  if (!hasUserInfo) {
    return NextResponse.redirect('/'); // Redirect to the homepage if the cookie is not present
  }
  const response = NextResponse.next();
 
  return response;
}