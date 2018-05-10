#!/usr/bin/perl -w
use CGI;
my $cgi = new CGI;
my $name = $cgi->param('name');
my $student_id = $cgi->param('student_id');
print "Content-type: text/html\n\n";
print "Hello $name, your student ID is $student_id";
