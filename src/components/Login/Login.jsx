import { useForm } from 'react-hook-form'
import { useHistory, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {
    TextField,
    FormControl,
    InputLabel,
    IconButton,
    InputAdornment,
    OutlinedInput,
    FormControlLabel,
    FormHelperText,
    Checkbox
} from '@mui/material';
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/store/actions/clientActions';


const Login = () => {
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const submitForm = async (data) => {
        setLoading(true);
        try {
            const response = await dispatch(loginUser({
                email: data.email,
                password: data.password,
                remember: data.remember || false
            }));

            if (data.remember) {
                localStorage.setItem("token", JSON.stringify(response.token));
            }

            alert("Login successful!");
            if (history.length > 1) {
                history.goBack();
            } else {
                history.push("/");
            }

        } catch (error) {
            toast.error("Login failed!");
        } finally {
            setLoading(false);
        }
    };


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="flex flex-col items-center py-10">
            <form onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-5 py-[10px] px-[60px]'>
                <h1 className="font-montserrat font-bold text-[32px] text-center text-[#23A6F0] pb-4">Login</h1>
                {/* Email */}
                <TextField
                    id="outlined-email"
                    label="Email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    {...register("email", {
                        required: "Please enter your email",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        },
                    })}
                />


                {/* Password */}
                <FormControl variant="outlined" error={!!errors.password}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                            required: "Please enter your password"
                        })}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={showPassword ? "hide the password" : "display the password"}
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    <FormHelperText>
                        {errors.password ? errors.password.message : ""}
                    </FormHelperText>
                </FormControl>

                {/* Remember Me Checkbox */}
                <FormControlLabel
                    label="Remember Me"
                    control={
                        <Checkbox
                            {...register("remember")}
                            name="remember"
                            value="true"
                            color="primary"
                        />
                    }
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`border border-[#23A6F0] py-[15px] px-[40px] rounded-[5px] 
                bg-[#23A6F0] text-[#FFFFFF] font-bold text-base flex items-center justify-center gap-2
                ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                    Login
                    {loading && (
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                        </svg>
                    )}
                </button>
            </form>
        </div>
    )
}
export default Login;