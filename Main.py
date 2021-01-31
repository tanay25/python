from datetime import *
from pymysql import *
ans='y'
while ans=='y':
    dt=datetime.now()
    y=dt.year
    m=dt.month
    d=dt.day
    doopen=str(y)+"-"+str(m)+"-"+str(d)
    print('1. Open Account')
    print('2. Deposit')
    print('3. Withdraw')
    print('4. Show Balance')
    print('5. Maximum Deposit by person')
    print('6. Exit')
    print('Choice ')
    ch=int(input())
    if ch==1:
        print('1. Saving Account')
        print('2. Current Account')
        choice=int(input('Enter Your Choice'))
        if choice==1:
            #print('Saving Account')
            try:
                con=connect(db='bankmaster',user='root',passwd='root',host='localhost')
                cur=con.cursor()
                acno=int(input('Account Number'))
                name=input('Account Holder Name')
                dob=input('Date of Birth yyyy-mm-dd')
                addr=input('Address')
                pin=input('Pin')
                mobile=input('Mobile No')
            #doopen=input('Account Open Date')
                balance=float(input('Accout Balance'))
                actype='Saving'
                i=cur.execute("insert into master values(%d,'%s','%s','%s','%s','%s','%s',%f,'%s')"%(acno,name,dob,addr,pin,mobile,doopen,balance,actype))
                if i==1:
                    con.commit()
                    print('Account Opened')
            except Exception as e:
                print(e)
            finally:
                con.close()
        elif choice==2:
            print('Current Account')
            con=connect(db='bankmaster',user='root',passwd='root',host='localhost')
            cur=con.cursor()
            acno=int(input('Account Number'))
            name=input('Account Holder Name')
            dob=input('Date of Birth yyyy-mm-dd')
            addr=input('Address')
            pin=input('Pin')
            mobile=input('Mobile No')
            #doopen=input('Account Open Date')
            balance=float(input('Accout Balance'))
            actype='Current'
            i=cur.execute("insert into master values(%d,'%s','%s','%s','%s','%s','%s',%f,'%s')"%(acno,name,dob,addr,pin,mobile,doopen,balance,actype))
            if i==1:
                con.commit()
                print('Account Opened')
                con.close()
    elif ch==2:
        con=connect(db='bankmaster',user='root',passwd='root',host='localhost')
        cur=con.cursor()
        acno=int(input('Account Number'))
        cur.execute("select * from master where acno=%d"%(acno))
        rs=cur.fetchall()
        if len(rs)==1:
            dtype='D'
            amt=float(input('Enter Amount to Deposit'))
            dod=doopen
            i=cur.execute("insert into trans values(%d,'%s',%f,'%s')"%(acno,dod,amt,dtype))
            if i==1:
                j=cur.execute("update master set balance_amount=balance_amount+%f where acno=%d"%(amt,acno))
                if j==1:
                    con.commit()
                    con.close()
                    print('Account Updated')
        else:
            print('Account Does not exist')
    elif ch==3:
        con=connect(db='bankmaster',user='root',passwd='root',host='localhost')
        cur=con.cursor()
        acno=int(input('Account Number'))
        cur.execute("select * from master where acno=%d"%(acno))
        rs=cur.fetchall()
        if len(rs)==1:
            dtype='W'
            amt=float(input('Enter Amount to Withdraw'))
            dod=doopen
            i=cur.execute("insert into trans values(%d,'%s',%f,'%s')"%(acno,dod,amt,dtype))
            if i==1:
                j=cur.execute("update master set balance_amount=balance_amount-%f where acno=%d"%(amt,acno))
                if j==1:
                    con.commit()
                    con.close()
                    print('Account Updated')
        else:
            print('Account Does not exist')
    elif ch==4:
        con=connect(db='bankmaster',user='root',passwd='root',host='localhost')
        cur=con.cursor()
        acno=int(input('Account Number'))
        cur.execute("select balance_amount from master where acno=%d"%(acno))
        rs=cur.fetchall()
        if len(rs)==1:
            print('Balance Amount is ',rs[0][0])
        else:
            print('Account Does not exist')
        con.close()
    elif ch==5:
        con=connect(db='bankmaster',user='root',passwd='root',host='localhost')
        cur=con.cursor()
        mno=int(input('Enter Month No'))
        cur.execute("select max(amt),month(dod) from trans where month(dod)=%d"%(mno))
        rs=cur.fetchall()
        print(rs)
        con.close()
    else:
        exit()
    ans=input('Continue yes/no') 