/// write to file
set fso = CreateObject("Scripting.FileSystemObject"); 
s = fso.CreateTextFile("C:\test.txt", True);
s.writeline("HI");
s.writeline("Bye");
s.writeline("-----------------------------");
s.Close();
